(function() {
  var app;
  if (!(window.app != null)) {
    window.app = {};
  }
  app = window.app;
  app.current_user = "XXX";
  app.upvoted = [];
  app.upvote = function(rid) {
    app.upvoted.push(rid);
    return $.ajax({
      cache: false,
      type: "POST",
      url: "/r/" + rid + "/upvote",
      dataType: "json",
      error: function() {
        return console.log('meh');
      },
      success: function(data) {}
    });
  };
  app.include = function(filename) {
    var script;
    script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    return $('head').append(script);
  };
  app.poll_errors = 0;
  app.poll = function(root) {
    return $.ajax({
      cache: false,
      type: "GET",
      url: "/r/" + (root.attr('id')) + "/recv",
      dataType: "json",
      error: function() {
        app.poll_errors += 1;
        return setTimeout(app.poll, 10 * 1000);
      },
      success: function(data) {
        var hide_upvote, parent, recdata, record, _i, _len;
        try {
          app.poll_errors = 0;
          if (data) {
            for (_i = 0, _len = data.length; _i < _len; _i++) {
              recdata = data[_i];
              if ($('#' + recdata.parent_id).length > 0 && $('#' + recdata._id).length === 0) {
                parent = $('#' + recdata.parent_id);
                record = new window.app.Record(recdata);
                parent.find('.children:eq(0)').prepend(record.render({
                  is_root: false
                }));
              } else {
                hide_upvote = app.upvoted.indexOf(recdata._id) !== -1;
                record = new window.app.Record(recdata);
                record.redraw({
                  hide_upvote: hide_upvote
                });
              }
            }
          }
          return app.poll(root);
        } catch (e) {
          return console.log(e);
        }
      }
    });
  };
  $(document).ready(function() {
    var root;
    if ($('[data-root="true"]').length > 0) {
      root = $('[data-root="true"]:eq(0)');
      return setTimeout((function() {
        return app.poll(root);
      }), 500);
    }
  });
}).call(this);
