import { Formik, Form, Field } from "formik";
import { useAppInfo } from "../../context/AppContext";
import { MdShareLocation } from "react-icons/md";
import "./forms.css";
import { useModal } from '../Modals/useModal';
import {Locations,Modal} from '../../components/index'

const AddLocationForm = () => {
  const { addLocation } = useAppInfo();
  const [isOpenLocations, closeLocations, openLocations] = useModal(false)
  return (
    <div className="form_container">
      <div className="form_container-icon">
        <div className="icon-title">See Locations</div>
        <MdShareLocation onClick={openLocations} size={70} color="#fff" />
        <Modal isOpen={isOpenLocations} closeModal={closeLocations}>
        <Locations/>
      </Modal>
       
      </div>
      <div className="form_container-form">
        <div className="form_container-form-title">Add Location</div>
        <Formik
          initialValues={{
            en: "",
            es: "",
          }}
          onSubmit={(values, {resetForm}) => {
            addLocation(values);
            resetForm({values:''})
          }}
        >
          {({ handleSubmit }) => (
            <Form className="form_container-form" onSubmit={handleSubmit}>
              <Field className="form_container-field" name="en" placeholder="Location" />
              <Field className="form_container-field" name="es" placeholder="Locación" />
              <button onClick={openLocations} type="submit">Save</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddLocationForm;
