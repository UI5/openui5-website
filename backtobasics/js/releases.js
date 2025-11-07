'use strict';
/**
 * Releases Loader (Separation: Data vs Presentation)
 * - Phase 1: Fetch release data from OpenUI5 Version Tracker API
 * - Phase 2: Render using HTML <template> element (release rows)
 */

(function () {

  const API_URL = 'https://openui5versiontracker.cfapps.eu10.hana.ondemand.com/OpenUI5ReleasesInfo';

  /***********************
   * Utility
   ***********************/
  function fetchJSON(url) {
    return fetch(url, { cache: 'no-cache' })
      .then(r => {
        if (!r.ok) throw new Error('Fetch failed ' + url + ' ' + r.status);
        return r.json();
      });
  }

  /***********************
   * Data Validation
   ***********************/
  function validateRelease(release) {
    // Check for required fields
    if (!release.version) {
      console.warn('[releases-loader] Release ignored - missing version:', release);
      return false;
    }
    if (!release.release_date) {
      console.warn('[releases-loader] Release ignored - missing release_date:', release.version);
      return false;
    }
    return true;
  }

  /***********************
   * Date Formatting
   ***********************/
  function formatDate(dateStr) {
    // Input format: "DD.MM.YYYY"
    // Output format: locale-appropriate readable date
    if (!dateStr) return '';
    
    const parts = dateStr.split('.');
    if (parts.length !== 3) {
      console.warn('[releases-loader] Invalid date format:', dateStr);
      return dateStr; // Return as-is if format is unexpected
    }
    
    const [day, month, year] = parts;
    const date = new Date(year, month - 1, day);
    
    if (isNaN(date.getTime())) {
      console.warn('[releases-loader] Could not parse date:', dateStr);
      return dateStr;
    }
    
    // Format as "Month DD, YYYY" (e.g., "October 27, 2025")
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  }

  /***********************
   * Template Rendering
   ***********************/
  function getTpl(id) {
    const tpl = document.getElementById(id);
    if (!tpl || !(tpl instanceof HTMLTemplateElement)) {
      console.warn('[releases-loader] Template missing:', id);
      return null;
    }
    return tpl;
  }

  function cloneTpl(id) {
    const tpl = getTpl(id);
    return tpl ? tpl.content.firstElementChild.cloneNode(true) : null;
  }

  function renderReleaseRow(release) {
    const node = cloneTpl('tpl-release-row');
    if (!node) return null;

    // Populate version
    const versionEl = node.querySelector('.release-version');
    if (versionEl) {
      versionEl.textContent = release.version;
    }

    // Populate download links
    const sdkLink = node.querySelector('.release-sdk');
    const runtimeLink = node.querySelector('.release-runtime');
    const mobileLink = node.querySelector('.release-mobile');

    if (sdkLink && release.url_download_sdk) {
      sdkLink.setAttribute('href', release.url_download_sdk);
    } else if (sdkLink) {
      sdkLink.style.display = 'none';
    }

    if (runtimeLink && release.url_download_runtime) {
      runtimeLink.setAttribute('href', release.url_download_runtime);
    } else if (runtimeLink) {
      runtimeLink.style.display = 'none';
    }

    if (mobileLink && release.url_download_mobile) {
      mobileLink.setAttribute('href', release.url_download_mobile);
    } else if (mobileLink) {
      mobileLink.style.display = 'none';
    }

    // Populate documentation links
    const demokitLink = node.querySelector('.release-demokit');
    const notesLink = node.querySelector('.release-notes');

    if (demokitLink && release.url_demokit) {
      demokitLink.setAttribute('href', release.url_demokit);
    } else if (demokitLink) {
      demokitLink.style.display = 'none';
    }

    if (notesLink && release.url_releasenotes) {
      notesLink.setAttribute('href', release.url_releasenotes);
    } else if (notesLink) {
      notesLink.style.display = 'none';
    }

    // Populate release date
    const dateEl = node.querySelector('.release-date');
    if (dateEl) {
      dateEl.textContent = formatDate(release.release_date);
    }

    return node;
  }

  function renderReleases(releases) {
    const tbody = document.getElementById('releases-tbody');
    if (!tbody) {
      console.error('[releases-loader] releases-tbody element not found');
      return;
    }

    // Clear loading/error messages
    tbody.innerHTML = '';

    // Filter and validate releases
    const validReleases = releases.filter(validateRelease);

    if (validReleases.length === 0) {
      showError('No valid release data available.');
      return;
    }

    console.log(`[releases-loader] Rendering ${validReleases.length} release(s)`);

    // Find the latest long-term maintenance release (has eom field and value)
    const latestLTMRelease = findLatestLTMRelease(validReleases);
    
    // Update the stable release button with the latest LTM release
    updateStableReleaseButton(latestLTMRelease);

    // Render each release
    validReleases.forEach(release => {
      const row = renderReleaseRow(release);
      if (row) {
        tbody.appendChild(row);
      }
    });
  }

  /***********************
   * LTM Release Detection
   ***********************/
  function findLatestLTMRelease(releases) {
    // Find the first release with a truthy eom (end of maintenance) value
    // A truthy eom indicates a long-term maintenance release
    const ltmRelease = releases.find(release => !!release.eom);
    
    if (!ltmRelease) {
      console.warn('[releases-loader] No LTM release found, using first release');
      return releases[0];
    }

    console.log(`[releases-loader] Using LTM release: ${ltmRelease.version} (eom: ${ltmRelease.eom})`);
    return ltmRelease;
  }

  /***********************
   * Stable Release Button
   ***********************/
  function updateStableReleaseButton(latestRelease) {
    const btn = document.getElementById('stable-release-btn');
    if (!btn) {
      console.warn('[releases-loader] stable-release-btn element not found');
      return;
    }

    if (!latestRelease || !latestRelease.version) {
      console.warn('[releases-loader] Cannot update button - no valid release data');
      btn.style.display = 'none';
      return;
    }

    // Update button text and href
    btn.textContent = `Download Stable Release (${latestRelease.version})`;
    
    // Use the SDK download link if available, otherwise fallback to demokit
    if (latestRelease.url_download_sdk) {
      btn.setAttribute('href', latestRelease.url_download_sdk);
    } else if (latestRelease.url_demokit) {
      btn.setAttribute('href', latestRelease.url_demokit);
    } else {
      // Fallback to generic SDK URL
      btn.setAttribute('href', 'https://sdk.openui5.org/');
    }

    // Show the button
    btn.style.display = '';
  }

  /***********************
   * Error Display
   ***********************/
  function showError(message) {
    const tbody = document.getElementById('releases-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    // Use template for error message
    const errorRow = cloneTpl('tpl-error-row');
    if (errorRow) {
      const messageEl = errorRow.querySelector('.error-message');
      if (messageEl) {
        messageEl.textContent = message;
      }
      tbody.appendChild(errorRow);
    }

    // Hide the stable release button when there's an error
    const btn = document.getElementById('stable-release-btn');
    if (btn) {
      btn.style.display = 'none';
    }
  }

  /***********************
   * Initialization
   ***********************/
  async function init() {
    try {
      console.log('[releases-loader] Fetching release data from:', API_URL);
      const releases = await fetchJSON(API_URL);
      
      if (!Array.isArray(releases)) {
        throw new Error('Invalid data format: expected array of releases');
      }

      renderReleases(releases);
    } catch (error) {
      console.error('[releases-loader] Failed to load releases:', error);
      showError('Failed to load release information. Please try again later.');
    }
  }

  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
