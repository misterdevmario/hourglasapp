import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppInfo } from "../../context/AppContext";
import { MdOutlineRoomService } from "react-icons/md";
import { useModal } from "../Modals/useModal";
import { RestaurantsSpecsService, Modal } from "../../components/index";
import "./restaurantsspecsform.css";

const RestaurantsSpecsServiceForm = () => {
  const { addRestaurantsService } = useAppInfo();
  const [isOpenService, closeService, openService] = useModal(false);
  return (
    <div className="restaurants_specs-container" id="service">
      <div className="ricon-title">Tipos de Servicio</div>
      <div className="restaurants_specs-container-form">
        <div className="restaurants_specs-container-form-title">
          Agregar Tipo de Servicio
        </div>
        <div className="restaurants_specs-form-container">
          <MdOutlineRoomService
            className="restaurants_specs-container-ricon"
            onClick={openService}
            size={20}
            color="#fff"
          />
          <Modal isOpen={isOpenService} closeModal={closeService}>
            <RestaurantsSpecsService />
          </Modal>
        
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
            addRestaurantsService(values);
            resetForm({ values: "" });
            openService();
          }}
        >
          {({ handleSubmit }) => (
            <Form
              className="restaurants_specs-container-form"
              onSubmit={handleSubmit}
            >
              <Field
                className="restaurants_specs-container-field"
                name="en"
                placeholder="Ingles"
              />
              <ErrorMessage
                component="p"
                className="restaurants_specs-container-field-error"
                name="en"
              />
              <Field
                className="restaurants_specs-container-field"
                name="es"
                placeholder="Español"
              />
              <ErrorMessage
                component="p"
                className="restaurants_specs-container-field-error"
                name="es"
              />
              <button type="submit">Guardar</button>
            </Form>
          )}
        </Formik>
      </div>
      </div>
    </div>
  );
};

export default RestaurantsSpecsServiceForm;