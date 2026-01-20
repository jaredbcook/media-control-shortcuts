// Default values
interface Defaults {
    minSpeed: number;
    maxSpeed: number;
    speedStep: number;
}

const DEFAULTS: Defaults = {
    minSpeed: 0.25,
    maxSpeed: 4.0,
    speedStep: 0.25
};

// Saves options to chrome.storage
const saveOptions = (): void => {
    const minSpeed = parseFloat((document.getElementById('minSpeed') as HTMLInputElement).value);
    const maxSpeed = parseFloat((document.getElementById('maxSpeed') as HTMLInputElement).value);
    const speedStep = parseFloat((document.getElementById('speedStep') as HTMLInputElement).value);

    // Validation
    if (minSpeed >= maxSpeed) {
        showStatus('Error: Min speed must be less than Max speed.', true);
        return;
    }
    if (speedStep <= 0) {
        showStatus('Error: Step must be positive.', true);
        return;
    }

    chrome.storage.sync.set(
        { minSpeed, maxSpeed, speedStep },
        () => {
            showStatus('Options saved.');
        }
    );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = (): void => {
    chrome.storage.sync.get(
        DEFAULTS,
        (items: Defaults) => {
            (document.getElementById('minSpeed') as HTMLInputElement).value = items.minSpeed.toString();
            (document.getElementById('maxSpeed') as HTMLInputElement).value = items.maxSpeed.toString();
            (document.getElementById('speedStep') as HTMLInputElement).value = items.speedStep.toString();
        }
    );
};

const showStatus = (message: string, isError: boolean = false): void => {
    const status = document.getElementById('status');
    if (!status) return;
    status.textContent = message;
    status.style.color = isError ? '#ef4444' : '#22c55e';
    status.classList.add('visible');
    setTimeout(() => {
        status.classList.remove('visible');
    }, 2000);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
const optionsForm = document.getElementById('options-form');
if (optionsForm) {
    optionsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveOptions();
    });
}
