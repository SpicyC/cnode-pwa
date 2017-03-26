// https://stackoverflow.com/questions/33704791/how-do-i-uninstall-a-service-worker
navigator.serviceWorker.getRegistrations().then(function (registrations) {
  for (var i = 0; i < registrations.length; i++) {
    registrations[i].unregister()
  }
})
