module.exports = {
  base: "/api/",
  title: "Universal Wallet Docs",
  description: "Universal Wallet Description from config.js",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: "BlockX Labs", link: "https://blockxlabs.com" },
      {
        text: "Univeral Wallet",
        link: "https://github.com/blockxlabs/universal-wallet"
      },
      {
        text: "Documentation",
        items: [
          { text: "Sign Message", link: "https://polkadot.js.org/api/" },
          { text: "Send Transaction", link: "https://polkadot.js.org/api/" },
          { text: "Enable DApp", link: "https://polkadot.js.org/common/" },
          { text: "Create Account", link: "https://polkadot.js.org/ui/" }
        ]
      },
      { text: "GitHub", link: "https://github.com/blockxlabs/universal-wallet" }
    ],
    search: false,
    sidebar: [
      {
        title: "Examples",
        path: "/examples/",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ["examples/create_account/", "Create Account"],
          ["examples/enable_request/", "Enable Request"],
          ["examples/send_transaction/", "Send Transaction"],
          ["examples/sign_message/", "Sign Message"]
        ]
      }
      // {
      //   title: 'Substrate interfaces',
      //   collapsable: false,
      //   sidebarDepth: 0,
      //   children: [
      //     ['/METHODS_RPC.md', 'Substrate RPC'],
      //     ['/METHODS_CONSTANTS.md', 'Constants (defaults)'],
      //     ['/METHODS_STORAGE.md', 'State storage (defaults)'],
      //     ['/METHODS_EXTRINSICS.md', 'Extrinsics (defaults)'],
      //     ['/METHODS_EVENTS.md', 'System events (defaults)']
      //   ]
      // },
      // ['/api/', '@polkadot/api'],
      // ['/types/', '@polkadot/types'],
      // '/CONTRIBUTING.md'
    ]
  }
};
