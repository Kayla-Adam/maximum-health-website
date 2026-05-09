// Accordion Component
document.addEventListener('DOMContentLoaded', function () {
  var triggers = document.querySelectorAll('.accordion__trigger');

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var item = this.parentElement;
      var content = item.querySelector('.accordion__content');
      var isActive = item.classList.contains('active');

      // Close all other accordion items in the same accordion
      var accordion = item.parentElement;
      accordion.querySelectorAll('.accordion__item').forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion__content').style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
