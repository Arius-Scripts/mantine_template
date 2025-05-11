RegisterCommand("test", function(source, args, rawCommand)
    SendNUIMessage({
        action = "testUI",
        data = true
    })
end)


RegisterNUICallback("getConfig", function(data, cb)
    cb({}) --config da passare in web
end)
