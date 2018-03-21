var ajaxContactForm = function() {  
            $('#contactform').each(function() {
                $(this).validate({
                    submitHandler: function( form ) {
                        var $form = $(form),
                            str = $form.serialize(),
                            loading = $('<div />', { 'class': 'loading' });

                        $.ajax({
                            type: "POST",
                            url:  $form.attr('action'),
                            data: str,
                            beforeSend: function () {
                                $form.find('.form-submit').append(loading);
                            },
                            success: function( msg ) {
                                var result, cls;                            
                                if ( msg == 'Success' ) {                                
                                    result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                    cls = 'msg-success';
                                } else {
                                    result = 'Error sending email.';
                                    cls = 'msg-error';
                                }

                                $form.prepend(
                                    $('<div />', {
                                        'class': 'flat-alert ' + cls,
                                        'text' : result
                                    }).append(
                                        $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                    )
                                );

                                $form.find(':input').not('.submit').val('');
                            },
                            complete: function (xhr, status, error_thrown) {
                                $form.find('.loading').remove();
                            }
                        });
                    }
                });
            }); // each contactform
        };   // ajax ContactForm
