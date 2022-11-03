import { Formik, Form, Field } from "formik";
import { useAppInfo } from "../../context/AppContext";

const UploadImageForm = () => {

  const {addLocation} = useAppInfo()

  return (
    <div>
      <Formik
        initialValues={{
          en: "",
          es: "",
        }}
        onSubmit={(values, actions) => {
          addLocation(values)
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="en">Restaurant Name</label>
            <Field name="en" placeholder="Name" />
            <label htmlFor="es">Nombre del Restaurante</label>
            <Field name="es" placeholder="Nombre" />
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UploadImageForm;
