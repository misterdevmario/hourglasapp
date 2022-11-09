import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppInfo } from "../../context/AppContext";
import { BiNetworkChart } from "react-icons/bi";
import { useModal } from "../Modals/useModal";
import { Activity, Modal } from "../../components/index";
import "./forms.css";

const AddActivityForm = () => {
  const { addActivity } = useAppInfo();
  const [isOpenActivities, closeActivities, openActivities] = useModal(false);
  return (
    <div className="form_container">
      <div className="form_container-icon">
        <div className="form_container-icon-title">Actividades</div>
        <BiNetworkChart
          className="form_container-icon-openmodal"
          onClick={openActivities}
          size={70}
          color="#fff"
        />
        <Modal isOpen={isOpenActivities} closeModal={closeActivities}>
          <Activity />
        </Modal>
      </div>
      <div className="form_container-form">
        <div className="form_container-form-title">Agregar actividad</div>
        <Formik
          initialValues={{
            en: "",
            es: "",
          }}
          validationSchema={Yup.object({
            en: Yup.string()
              .required("Palabra en ingles requerida!")
              .min(3, "La longitud minima es de 3 letras!")
              .max(19, "La longitud maxima es de 19 letras!"),
            es: Yup.string()
              .required("Palabra en español requerida!")
              .min(3, "La longitud minima es de 3 letras!")
              .max(19, "La longitud maxima es de 19 letras!"),
          })}
          onSubmit={(values, { resetForm }) => {
            addActivity(values);
            resetForm({ values: "" });
            openActivities();
          }}
        >
          {({ handleSubmit }) => (
            <Form className="form_container-form" onSubmit={handleSubmit}>
              <Field
                className="form_container-field"
                name="en"
                placeholder="Ingles"
              />
              <ErrorMessage
                component="p"
                className="form_container-field-error"
                name="en"
              />
              <Field
                className="form_container-field"
                name="es"
                placeholder="Español"
              />
              <ErrorMessage
                component="p"
                className="form_container-field-error"
                name="es"
              />
              <button type="submit">Guardar</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddActivityForm;
