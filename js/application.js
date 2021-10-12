(function() {
  function doSiteSearch(keyword) {
    var $keyword = $('#keyword');
    $keyword.val('site:' + $keyword.data('site') + ' ' + keyword);
    $keyword.parents('form').submit();
  }

  function searchSubmitHandler(evt) {
    var keyword = $.trim($(this).val());
    if (evt.keyCode == 13 && keyword) {
      doSiteSearch(keyword);
    }
  }

  $(document).ready(function() {
    $(".button-collapse").sideNav({ menuWidth: 150 });
    $('#input-search').on('keyup', searchSubmitHandler);
  });
})();
