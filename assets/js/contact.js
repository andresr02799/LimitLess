/* Contact Form Dynamic */
$(function () {
    // Get the form and messages div
    var form = $('#contact-form');
    var formMessages = $('.form-messege');
    var submitButton = $(form).find('button[type="submit"]'); // Select the submit button

    // Event listener for the contact form
    $(form).submit(function (e) {
        // Prevent the browser from submitting the form normally
        e.preventDefault();

        // Clear previous messages
        $(formMessages).removeClass('success error').empty();

        // Serialize the form data
        var formData = $(form).serialize();

        // Verify reCAPTCHA response
        var recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            $(formMessages)
                .addClass('error')
                .text('Please complete the CAPTCHA verification.');
            return;
        }

        // Append the reCAPTCHA response to the form data
        formData += '&g-recaptcha-response=' + recaptchaResponse;

        // Add submitting animation to the button
        submitButton.prop('disabled', true).text('Submitting...');

        // Submit the form via AJAX
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
            dataType: 'json', // Expect JSON response from the server
            beforeSend: function () {
                $(formMessages)
                    .removeClass('error success')
                    .addClass('info')
                    .text('Submitting your request...');
            }
        })
            .done(function (response) {
                if (response.status === 'success') {
                    // Success: Display the success message
                    $(formMessages).removeClass('error').addClass('success').text(response.message);

                    // Clear the form inputs and reset reCAPTCHA
                    $('#contact-form input, #contact-form textarea').val('');
                    grecaptcha.reset();
                } else if (response.status === 'error') {
                    // Error: Display validation errors or message
                    if (response.errors) {
                        var errorMessages = '<ul>';
                        $.each(response.errors, function (key, value) {
                            errorMessages += '<li>' + value + '</li>';
                        });
                        errorMessages += '</ul>';
                        $(formMessages).removeClass('success').addClass('error').html(errorMessages);
                    } else {
                        $(formMessages).removeClass('success').addClass('error').text(response.message);
                    }
                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                // AJAX failure: Display a generic error message
                $(formMessages).removeClass('success').addClass('error').text(
                    'An error occurred while processing your request. Please try again later.'
                );
            })
            .always(function () {
                // Remove submitting animation and re-enable the button
                submitButton.prop('disabled', false).text('Send A Message');
            });
    });
});