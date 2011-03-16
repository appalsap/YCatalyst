exports.template = ->
  if @invite_code
    p "Please register here."
  else
    p "Please register here if you have an invite code."

  form action: "/register", method: "POST", ->
    table ->
      tr ->
        td ->
          label "desired username"
        td ->
          input name: "username"
      tr ->
        td ->
          label "desired password"
        td ->
          input name: "password", type: "password"
      tr ->
        td ->
          label "password repeat"
        td ->
          input name: "password2", type: "password"
      tr ->
        td ->
          label "email"
        td ->
          input name: "email", value: @email or ''
      tr ->
        td ->
          label "invite code"
        td ->
          input name: "invite", value: @invite_code or ''
      tr ->
        td colspan: 2, ->
          input type: "submit", value: "register"

exports.sass = """
  body
    table
      td
        input[name="email"]
          :width 250px
"""
