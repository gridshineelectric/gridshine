// Email handling service
export const sendEmail = async (formData) => {
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'shinegridelectric0@gmail.com'
    };

    try {
        await emailjs.send(
            'service_your_service_id', // You'll need to replace this
            'template_your_template_id', // You'll need to replace this
            templateParams,
            'your_public_key' // You'll need to replace this
        );
        return { success: true };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error };
    }
};