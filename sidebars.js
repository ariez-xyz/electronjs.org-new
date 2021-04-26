module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
      items: ['get-started/quick-start', 'get-started/installation'],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/accessibility',
        'development/using-native-node-modules',
      ],
    },
    {
      type: 'category',
      label: 'Performance',
      items: ['performance/performance', 'performance/message-ports'],
    },
    {
      type: 'category',
      label: 'Security',
      items: ['security/context-isolation', 'security/security'],
    },
    {
      type: 'category',
      label: 'Distribution',
      items: [
        'distribution/code-signing',
        'distribution/mac-app-store-submission-guide',
        'distribution/windows-store-guide',
        'distribution/snapcraft',
        'distribution/application-distribution',
      ],
    },
    {
      type: 'category',
      label: 'Testing And Debugging',
      items: [
        'testing-and-debugging/using-selenium-and-webdriver',
        'testing-and-debugging/debugging-main-process',
        'testing-and-debugging/debugging-vscode',
        'testing-and-debugging/devtools-extension',
        'testing-and-debugging/application-debugging',
        'testing-and-debugging/automated-testing-with-a-custom-driver',
        'testing-and-debugging/testing-on-headless-ci',
        'testing-and-debugging/testing-widevine-cdm',
      ],
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        'how-to/dark-mode',
        'how-to/desktop-environment-integration',
        'how-to/fuses',
        'how-to/in-app-purchases',
        'how-to/keyboard-shortcuts',
        'how-to/linux-desktop-actions',
        'how-to/macos-dock',
        'how-to/multithreading',
        'how-to/native-file-drag-drop',
        'how-to/notifications',
        'how-to/offscreen-rendering',
        'how-to/online-offline-events',
        'how-to/progress-bar',
        'how-to/recent-documents',
        'how-to/repl',
        'how-to/represented-file',
        'how-to/spellchecker',
        'how-to/updates',
        'how-to/using-pepper-flash-plugin',
        'how-to/web-embeds',
        'how-to/windows-arm',
        'how-to/windows-taskbar',
      ],
    },
    {
      type: 'category',
      label: 'Internals',
      items: ['internals/electron-vs-nwjs'],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/boilerplates-and-clis',
        'resources/breaking-changes',
        'resources/electron-timelines',
        'resources/electron-versioning',
        'resources/faq',
        'resources/glossary',
        'resources/support',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing/README',
        'contributing/azure-vm-setup',
        'contributing/build-instructions-gn',
        'contributing/build-instructions-linux',
        'contributing/build-instructions-macos',
        'contributing/build-instructions-windows',
        'contributing/build-system-overview',
        'contributing/chromium-development',
        'contributing/clang-format',
        'contributing/clang-tidy',
        'contributing/coding-style',
        'contributing/debug-instructions-windows',
        'contributing/debugging-instructions-macos',
        'contributing/debugging-instructions-macos-xcode',
        'contributing/goma',
        'contributing/issues',
        'contributing/patches',
        'contributing/pull-requests',
        'contributing/setting-up-symbol-server',
        'contributing/source-code-directory-structure',
        'contributing/testing',
        'contributing/v8-development',
      ],
    },
  ],
  api: [
    {
      type: 'category',
      label: 'modules',
      items: [
        'api/accelerator',
        'api/app',
        'api/auto-updater',
        'api/browser-view',
        'api/browser-window',
        'api/browser-window-proxy',
        'api/client-request',
        'api/clipboard',
        'api/command-line',
        'api/command-line-switches',
        'api/content-tracing',
        'api/context-bridge',
        'api/cookies',
        'api/crash-reporter',
        'api/debugger',
        'api/desktop-capturer',
        'api/dialog',
        'api/dock',
        'api/download-item',
        'api/environment-variables',
        'api/experimental',
        'api/extensions',
        'api/file-object',
        'api/frameless-window',
        'api/global-shortcut',
        'api/in-app-purchase',
        'api/incoming-message',
        'api/ipc-main',
        'api/ipc-renderer',
        'api/locales',
        'api/menu',
        'api/menu-item',
        'api/message-channel-main',
        'api/message-port-main',
        'api/native-image',
        'api/native-theme',
        'api/net',
        'api/net-log',
        'api/notification',
        'api/power-monitor',
        'api/power-save-blocker',
        'api/process',
        'api/protocol',
        'api/remote',
        'api/sandbox-option',
        'api/screen',
        'api/service-workers',
        'api/session',
        'api/share-menu',
        'api/shell',
        'api/structures/bluetooth-device',
        'api/structures/certificate',
        'api/structures/certificate-principal',
        'api/structures/cookie',
        'api/structures/cpu-usage',
        'api/structures/crash-report',
        'api/structures/custom-scheme',
        'api/structures/desktop-capturer-source',
        'api/structures/display',
        'api/structures/event',
        'api/structures/extension',
        'api/structures/extension-info',
        'api/structures/file-filter',
        'api/structures/file-path-with-headers',
        'api/structures/gpu-feature-status',
        'api/structures/input-event',
        'api/structures/io-counters',
        'api/structures/ipc-main-event',
        'api/structures/ipc-main-invoke-event',
        'api/structures/ipc-renderer-event',
        'api/structures/jump-list-category',
        'api/structures/jump-list-item',
        'api/structures/keyboard-event',
        'api/structures/keyboard-input-event',
        'api/structures/memory-info',
        'api/structures/memory-usage-details',
        'api/structures/mime-typed-buffer',
        'api/structures/mouse-input-event',
        'api/structures/mouse-wheel-input-event',
        'api/structures/new-window-web-contents-event',
        'api/structures/notification-action',
        'api/structures/notification-response',
        'api/structures/point',
        'api/structures/post-body',
        'api/structures/post-data',
        'api/structures/printer-info',
        'api/structures/process-memory-info',
        'api/structures/process-metric',
        'api/structures/product',
        'api/structures/protocol-request',
        'api/structures/protocol-response',
        'api/structures/protocol-response-upload-data',
        'api/structures/rectangle',
        'api/structures/referrer',
        'api/structures/scrubber-item',
        'api/structures/segmented-control-segment',
        'api/structures/serial-port',
        'api/structures/service-worker-info',
        'api/structures/shared-worker-info',
        'api/structures/sharing-item',
        'api/structures/shortcut-details',
        'api/structures/size',
        'api/structures/task',
        'api/structures/thumbar-button',
        'api/structures/trace-categories-and-options',
        'api/structures/trace-config',
        'api/structures/transaction',
        'api/structures/upload-data',
        'api/structures/upload-file',
        'api/structures/upload-raw-data',
        'api/structures/web-source',
        'api/synopsis',
        'api/system-preferences',
        'api/touch-bar',
        'api/touch-bar-button',
        'api/touch-bar-color-picker',
        'api/touch-bar-group',
        'api/touch-bar-label',
        'api/touch-bar-other-items-proxy',
        'api/touch-bar-popover',
        'api/touch-bar-scrubber',
        'api/touch-bar-segmented-control',
        'api/touch-bar-slider',
        'api/touch-bar-spacer',
        'api/tray',
        'api/web-contents',
        'api/web-frame',
        'api/web-frame-main',
        'api/web-request',
        'api/webview-tag',
        'api/window-open',
      ],
    },
  ],
};