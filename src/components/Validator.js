import { useState } from 'react';

function withValidator(Component) {

    return function (props) {

        const [fields, setFields] = useState({});
        const [errors, setErrors] = useState({});
        const [isSubmitEnabled, setSubmitEnabled] = useState(false);

        function handleChange({ target }) {
            const error = !target.validity.valid ? target.validationMessage : '';
            setErrors({ ...errors, [target.name]: error });
            setFields({ ...fields, [target.name]: target.value });
            setSubmitEnabled(target.validity.valid);
        }

        function resetForm() {
            setFields({});
            setErrors({});
            setSubmitEnabled(false);
        }

        function handleSubmit(fields) {
            props.onSubmit(fields);
            resetForm();
        }

        function handleClose() {
            props.onClose();
            resetForm();
        }

        return (<Component {...props} isSubmitEnabled={isSubmitEnabled}
            fields={fields} errors={errors} onChange={handleChange}
            onSubmit={handleSubmit} onClose={handleClose} />)

    }
}

export default withValidator;