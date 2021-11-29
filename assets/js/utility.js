$.fn.extend({
    Disable: function () {
        return this.each(function () {
            $(this).attr("disabled", "disabled").attr("aria-disabled", "true").addClass("disabled")
        });
    },
    Enable: function () {
        return this.each(function () {
            $(this).removeAttr("disabled").removeAttr("aria-disabled").removeClass("disabled")
        });
    },
    ShowElement: function () {
        return this.each(function () {
            $(this).removeAttr("aria-hidden").removeClass("disnone");
        });
    },
    HideElement: function () {
        return this.each(function () {
            $(this).attr("aria-hidden", "true").addClass("disnone");
        });
    },
    InactiveTabs: function () {
        return this.each(function () {
            $(this).removeClass("active").addClass("inactive").attr("aria-hidden", "true");
        });
    },
    ActiveTabs: function () {
        return this.each(function () {
            $(this).addClass("active").removeClass("inactive").removeAttr("aria-hidden");
            $(this).find("h1:first").focus();
        });
    }
});

(function(document, history, location) {
    var HISTORY_SUPPORT = !!(history && history.pushState);
  
    var anchorScrolls = {
      ANCHOR_REGEX: /^#[^ ]+$/,
      OFFSET_HEIGHT_PX: 56,
  
      /**
       * Establish events, and fix initial scroll position if a hash is provided.
       */
      init: function() {
        //this.scrollToCurrent();
        $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
        $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
      },
  
      /**
       * Return the offset amount to deduct from the normal scroll position.
       * Modify as appropriate to allow for dynamic calculations
       */
      getFixedOffset: function() {
        return this.OFFSET_HEIGHT_PX;
      },
  
      /**
       * If the provided href is an anchor which resolves to an element on the
       * page, scroll to it.
       * @param  {String} href
       * @return {Boolean} - Was the href an anchor.
       */
      scrollIfAnchor: function(href, pushToHistory) {
        var match, anchorOffset;
  
        if(!this.ANCHOR_REGEX.test(href)) {
          return false;
        }
  
        match = document.getElementById(href.slice(1));
  
        if(match) {
          anchorOffset = $(match).offset().top - this.getFixedOffset();
          $('html, body').animate({ scrollTop: anchorOffset});
          $("a[refid]").removeClass("active").attr("aria-current", "false").removeAttr("aria-describedby");
          $("a[refid='" + href.slice(1) + "']").addClass("active").attr("aria-current", "true").attr("aria-describedby","selectedMenuText");
          // Add the state to history as-per normal anchor links
          if(HISTORY_SUPPORT && pushToHistory) {
            history.pushState({}, document.title, location.pathname + href);
          }
        }
  
        return !!match;
      },
      
      /**
       * Attempt to scroll to the current location's hash.
       */
      scrollToCurrent: function(e) { 
        if(this.scrollIfAnchor(window.location.hash) && e) {
            e.preventDefault();
        }
      },
  
      /**
       * If the click event's target was an anchor, fix the scroll position.
       */
      delegateAnchors: function(e) {
        var elem = e.target;
  
        if(this.scrollIfAnchor(elem.getAttribute('href'), true)) {
          e.preventDefault();
        }
      }
    };
  
      $(document).ready($.proxy(anchorScrolls, 'init'));
  })(window.document, window.history, window.location);
  