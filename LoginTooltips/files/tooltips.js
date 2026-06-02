// Override Bootstrap tooltip width to prevent horizontal shrinking
const style = document.createElement('style');
style.innerHTML = `
    .tooltip-inner {
        max-width: 350px !important;
        min-width: 250px !important;
        text-align: left !important;
        padding: 8px 12px !important;
    }
`;
document.head.appendChild(style);

const dataEl = document.getElementById('login-tooltips-data');
const strings = dataEl ? JSON.parse(dataEl.textContent) : {};

const rememberLoginCheckbox = document.getElementById('remember-login');
if (rememberLoginCheckbox) {
    const label = rememberLoginCheckbox.closest('label');
    if (label) {
        const icon = createHelpIcon(strings.remember_login || '');
        label.appendChild(icon);
    }
}

const secureSessionCheckbox = document.getElementById('secure-session');
if (secureSessionCheckbox) {
    const label = secureSessionCheckbox.closest('label');
    if (label) {
        const icon = createHelpIcon(strings.secure_session || '');
        label.appendChild(icon);
    }
}

function createHelpIcon(text) {
    var span = document.createElement('span');
    span.className = 'margin-left-4';
    span.innerHTML = '<i class="fa fa-question-circle text-primary" data-toggle="tooltip" data-placement="right" title="' + text + '" style="cursor:help;"></i>';

    // MantisBT initializes tooltips globally, but we trigger it manually here
    // to ensure icons injected after page load are also initialized
    if (window.jQuery) {
        jQuery(span).find('[data-toggle="tooltip"]').tooltip();
    }

    return span;
}
