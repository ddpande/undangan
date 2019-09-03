$(document).ready(function () {
	$("#curo").owlCarousel({
		margin: 20,
				loop: true,
				responsive: {
					0: {
						items: 2
					},
					600: {
						items: 2
					},
					1200: {
						items: 4
					}
				}
	});
	$("#curo2").owlCarousel({
		margin: 20,
        loop: true,
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 2
          },
          1200: {
            items: 2
          }
        }
	});
	$("#curo3").owlCarousel({
		margin: 10,
        loop: true,
        responsive: {
          0: {
            items: 4
          },
          600: {
            items: 4
          },
          1000: {
            items: 4
          }
        }
	});
});

// $('#myModal').modal('show');
