 // Show modal for adding a new medium
 $('#addMediumBtn').click(function(e) {
    e.preventDefault();
    const addMediumModal = new bootstrap.Modal(document.getElementById('addMediumModal'));
    addMediumModal.show();
});

// Save new medium and add it to the select input
$('#saveNewMedium').click(function() {
    const newMedium = $('#newMedium').val();
    if (newMedium) {
        $('#medium').append(`<option value="${newMedium}">${newMedium}</option>`);
        $('#medium').val(newMedium); // Selects the newly added option
        const addMediumModal = bootstrap.Modal.getInstance(document.getElementById('addMediumModal'));
        addMediumModal.hide(); // Hides the modal
        $('#newMedium').val(''); // Clears the input
    }
});

    // Show ID & Location form when the link is clicked
$('#showIdLocationForm').click(function(e) {
    e.preventDefault(); 
    $('#artworkForm').hide(); 
    $('#idLocationSection').fadeIn(); 
    $('html, body').animate({
        scrollTop: $('#idLocationSection').offset().top
    }, 500); 
});


    // Form submission with AJAX for artwork form
    $('#artworkForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const formData = $(this).serialize(); // Get form data
        
        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: formData,
            success: function(response) {
                alert('Form submitted successfully!');
            },
            error: function(error) {
                alert('There was an error submitting the form.');
            }
        });
    });

    // Form submission for ID & Location (dummy)
    $('#idLocationForm').submit(function(event) {
        event.preventDefault();
        alert('Location form submitted!');
    });

    // Back to Main View link click event
    $('#backToMainView').click(function(e) {
        e.preventDefault(); 
        $('#idLocationSection').hide(); 
        $('#artworkForm').show(); 
        $('html, body').animate({
            scrollTop: $('form#artworkForm').offset().top
        }, 500); 
    });
