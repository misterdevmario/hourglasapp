import { Formik, Form, Field } from "formik";
import { useAppInfo } from "../../context/AppContext";
import { BiNetworkChart } from "react-icons/bi";
import "./forms.css";
import { useModal } from '../Modals/useModal';
import {Activity,Modal} from '../../components/index'

const AddActivityForm = () => {
  const { addActivity } = useAppInfo();
  const [isOpenActivities, closeActivities, openActivities] = useModal(false)
  return (
    <div className="form_container">
      <div className="form_container-icon">
        <div className="icon-title">See Activities</div>
        <BiNetworkChart onClick={openActivities} size={70} color="#fff" />
        <Modal isOpen={isOpenActivities} closeModal={closeActivities}>
        <Activity/>
      </Modal>
       
      </div>
      <div className="form_container-form">
        <div className="form_container-form-title">Add Activity</div>
        <Formik
          initialValues={{
            en: "",
            es: "",
          }}
          onSubmit={(values, {resetForm}) => {
            addActivity(values);
            resetForm({values:''})
          }}
        >
          {({ handleSubmit }) => (
            <Form className="form_container-form" onSubmit={handleSubmit}>
              <Field className="form_container-field" name="en" placeholder="Activity" />
              <Field className="form_container-field" name="es" placeholder="Actividad" />
              <button onClick={openActivities} type="submit">Save</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddActivityForm;
