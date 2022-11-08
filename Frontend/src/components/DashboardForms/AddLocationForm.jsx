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
    <div className="form_container">
      <div className="form_container-icon">
        <div className="icon-title">See Locations</div>
        <MdShareLocation className="form_container-icon-openmodal" onClick={openLocations} size={70} color="#fff" />
        <Modal isOpen={isOpenLocations} closeModal={closeLocations}>
          <Locations />
        </Modal>
      </div>
      <div className="form_container-form">
        <div className="form_container-form-title">Add Location</div>
        <Formik
          initialValues={{
            en: "",
            es: "",
          }}
          validationSchema={Yup.object({
            en: Yup.string()
              .required("Word in english is required!")
              .min(3, "Minimum length of word is 3 characters!")
              .max(19, "Maximum length of word is 19 characters!"),
            es: Yup.string()
              .required("Word in spanish is required!")
              .min(3, "Minimum length of word is 3 characters!")
              .max(19, "Maximum length of word is 19 characters!"),
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
                placeholder="Location"
              />
              <ErrorMessage
                component="p"
                className="form_container-field-error"
                name="en"
              />
              <Field
                className="form_container-field"
                name="es"
                placeholder="Locación"
              />
              <ErrorMessage
                component="p"
                className="form_container-field-error"
                name="es"
              />
              <button type="submit">Save</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddLocationForm;
