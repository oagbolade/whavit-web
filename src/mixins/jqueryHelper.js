import './jquery.dataTables.min';

export default function($) {
  'use strict';
  $(function() {
    $('table').DataTable();
    let body = $('body');
    let contentWrapper = $('.content-wrapper');
    let scroller = $('.container-scroller');
    let footer = $('.footer');
    let sidebar = $('.sidebar');
    let quickLink = $('.btn-group.admin-access-level');
    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required
    let current = window.location.pathname
      .split('/')
      .slice(1, -1)
      .join(' ')
      .replace(/^\/|\/$/g, '');
    $('.nav li a', sidebar).each(function() {
      let $this = $(this);
      if (current === '') {
        //for root url
        if ($this.attr('href').indexOf('index.html') !== -1) {
          $(this)
            .parents('.nav-item')
            .last()
            .addClass('active');
          if ($(this).parents('.sub-menu').length) {
            $(this).addClass('active');
          }
        }
      } else {
        //for other url
        if ($this.attr('href').indexOf(current) !== -1) {
          $(this)
            .parents('.nav-item')
            .last()
            .addClass('active');
          if ($(this).parents('.sub-menu').length) {
            $(this).addClass('active');
          }
          if (current !== 'index.html') {
            $(this)
              .parents('.nav-item')
              .last()
              .find('.nav-link')
              .attr('aria-expanded', 'true');
            if ($(this).parents('.sub-menu').length) {
              $(this)
                .closest('.collapse')
                .addClass('show');
            }
          }
        }
      }
    });

    //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });

    //Change sidebar and content-wrapper height
    applyStyles();

    function applyStyles() {
      //Applying perfect scrollbar
      if (!body.hasClass('rtl')) {
        if ($('.settings-panel .tab-content .tab-pane.scroll-wrapper').length) {
          const settingsPanelScroll = new PerfectScrollbar(
            '.settings-panel .tab-content .tab-pane.scroll-wrapper'
          );
        }
        if ($('.chats').length) {
          const chatsScroll = new PerfectScrollbar('.chats');
        }
        if ($('.scroll-container').length) {
          const ScrollContainer = new PerfectScrollbar('.scroll-container');
        }
        if (body.hasClass('sidebar-fixed')) {
          const fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
        }
      }
    }
    $('.t-header-toggler').on('click', function() {
      body.toggleClass('sidebar-minimized');
      $(this).toggleClass('arrow');
      $('.navigation-menu').toggleClass('position');
      $('.page-body').toggleClass('sidebar-collpased side');
    });
    quickLink.on('click', () => {
      $('.sidebar_footer').toggleClass('opened');
    });
    $('[data-toggle="minimize"]').on('click', function() {
      if (
        body.hasClass('sidebar-toggle-display') ||
        body.hasClass('sidebar-absolute')
      ) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });
    $('.navbar.horizontal-layout .navbar-menu-wrapper .navbar-toggler').on(
      'click',
      function() {
        $('.navbar.horizontal-layout').toggleClass('header-toggled');
      }
    );
    //checkbox and radios
    $('.form-check label,.form-radio label').append(
      '<i class="input-helper"></i>'
    );
  });
  $(function() {
    $('.nav-settings').on('click', function() {
      $('#theme-settings').removeClass('open');
      $('#right-sidebar').toggleClass('open');
    });
    $('.settings-close').on('click', function() {
      $('#right-sidebar,#theme-settings').removeClass('open');
    });

    $('.navbar-nav .nav-item.color-setting').on('click', function() {
      $('#right-sidebar').removeClass('open');
      $('#theme-settings').toggleClass('open');
    });

    //background constants
    var navbar_classes =
      'navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink';
    var sidebar_classes = 'sidebar-light sidebar-dark';
    var $body = $('body');

    //sidebar backgrounds
    $('#sidebar-light-theme').on('click', function() {
      $body.removeClass(sidebar_classes);
      $body.addClass('sidebar-light');
      $('.sidebar-bg-options').removeClass('selected');
      $(this).addClass('selected');
    });
    $('#sidebar-dark-theme').on('click', function() {
      $body.removeClass(sidebar_classes);
      $body.addClass('sidebar-dark');
      $('.sidebar-bg-options').removeClass('selected');
      $(this).addClass('selected');
    });

    //Navbar Backgrounds
    $('.tiles.primary').on('click', function() {
      $('.navbar').removeClass(navbar_classes);
      $('.navbar').addClass('navbar-primary');
      $('.tiles').removeClass('selected');
      $(this).addClass('selected');
    });
    $('.tiles.success').on('click', function() {
      $('.navbar').removeClass(navbar_classes);
      $('.navbar').addClass('navbar-success');
      $('.tiles').removeClass('selected');
      $(this).addClass('selected');
    });
    $('.tiles.warning').on('click', function() {
      $('.navbar').removeClass(navbar_classes);
      $('.navbar').addClass('navbar-warning');
      $('.tiles').removeClass('selected');
      $(this).addClass('selected');
    });
    $('.tiles.danger').on('click', function() {
      $('.navbar').removeClass(navbar_classes);
      $('.navbar').addClass('navbar-danger');
      $('.tiles').removeClass('selected');
      $(this).addClass('selected');
    });
    $('.tiles.pink').on('click', function() {
      $('.navbar').removeClass(navbar_classes);
      $('.navbar').addClass('navbar-pink');
      $('.tiles').removeClass('selected');
      $(this).addClass('selected');
    });
    $('.tiles.info').on('click', function() {
      $('.navbar').removeClass(navbar_classes);
      $('.navbar').addClass('navbar-info');
      $('.tiles').removeClass('selected');
      $(this).addClass('selected');
    });
    $('.tiles.dark').on('click', function() {
      $('.navbar').removeClass(navbar_classes);
      $('.navbar').addClass('navbar-dark');
      $('.tiles').removeClass('selected');
      $(this).addClass('selected');
    });
    $('.tiles.default').on('click', function() {
      $('.navbar').removeClass(navbar_classes);
      $('.tiles').removeClass('selected');
      $(this).addClass('selected');
    });
  });
}