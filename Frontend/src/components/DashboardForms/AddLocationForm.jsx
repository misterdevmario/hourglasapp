import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppInfo } from "../../context/AppContext";
import { MdShareLocation } from "react-icons/md";
import { useModal } from "../Modals/useModal";
import { Locations, Modal } from "../../components/index";
import "./forms.css";

const AddLocationForm = () => {
  const { addLocation } = useAppInfo();
  const [isOpenLocations, closeLocations, openLocations] = useModal(false);
  return (
    <div className="form_container" id="locations">
      <div className="form_container-icon">
        <div className="icon-title">Locaciones</div>
        <MdShareLocation className="form_container-icon-openmodal" onClick={openLocations} size={70} color="#fff" />
        <Modal isOpen={isOpenLocations} closeModal={closeLocations}>
          <Locations />
        </Modal>
      </div>
      <div className="form_container-form">
        <div className="form_container-form-title">Agregar locación</div>
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
            addLocation(values);
            resetForm({ values: "" });
            openLocations();
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

export default AddLocationForm;
