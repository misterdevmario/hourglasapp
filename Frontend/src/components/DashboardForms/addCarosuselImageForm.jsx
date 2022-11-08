import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppInfo } from "../../context/AppContext";
import { BiNetworkChart } from "react-icons/bi";
import { useModal } from "../Modals/useModal";
import { Activity, Modal } from "../index";
import "./forms.css";

const AddCarouselImageForm = () => {
  const { addActivity } = useAppInfo();
  const [isOpenActivities, closeActivities, openActivities] = useModal(false);
  return (
    <div className="form_container">
      <div className="form_container-icon">
        <div className="form_container-icon-title">See Activities</div>
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
        <div className="form_container-form-title">Add Activity</div>
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
                placeholder="English-Activity"
              />
              <ErrorMessage
                component="p"
                className="form_container-field-error"
                name="en"
              />
              <Field
                className="form_container-field"
                name="es"
                placeholder="Español-Actividad"
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

export default AddCarouselImageForm;
