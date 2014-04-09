casper = require("casper").create()
notif = []

casper.start "http://sns.gree.net", ->
  @fillSelectors "form#login",
    "input[name=mail]": "your mail"
    "input[name=user_password]": "your pass"
  , true
  return

casper.then ->
  @evaluateOrDie (->
    /GREE/.test document.title
  ), "Login failed."
  return

casper.then ->
  notif = @evaluate(->
    elements = __utils__.findAll("div.x-small.bold")
    Array::map.call elements, (el) ->
      el.innerText
  )
  return

casper.run ->
  @echo notif.length + " new notifications exists.", "INFO_BAR"
  @echo(" - " + notif.join("\n - ")).exit()
  return
