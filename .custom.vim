if get(g:, 'loadplugins', 0) != 1
  call TriggerPlugins()
endif

lua << EOF
local dap = require('dap')
dap.configurations.cpp = {
  {
      name = "Launch file",
      type = "cppdbg",
      request = "launch",
      program = "${workspaceFolder}/obj-x86_64-pc-linux-gnu/js/src/js",
      cwd = '${workspaceFolder}',
      args = {'obj-x86_64-pc-linux-gnu/js/src/test.js'},
      stopOnEntry = true,
      setupCommands = {
        {
            text = '-enable-pretty-printing',
            description =  'enable pretty printing',
            ignoreFailures = false 
        },
      },
},
    }
EOF
