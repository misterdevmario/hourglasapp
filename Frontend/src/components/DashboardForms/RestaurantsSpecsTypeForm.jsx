import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppInfo } from "../../context/AppContext";
import { IoRestaurantOutline } from "react-icons/io5";
import { useModal } from "../Modals/useModal";
import { RestaurantsSpecsType, Modal } from "../../components/index";
import "./restaurantsspecsform.css";

const RestaurantsSpecsTypeForm = () => {
  const { addRestaurantsType } = useAppInfo();
  const [isOpenType, closeType, openType] = useModal(false);
  return (
    <div className="restaurants_specs-container" id="type">
      <div className="ricon-title">Tipos Restaurantes </div>
      <div className="restaurants_specs-container-form">
        <div className="restaurants_specs-container-form-title">
          Agregar Tipos de Restaurantes
        </div>
        <div className="restaurants_specs-form-container">
          <IoRestaurantOutline
            className="restaurants_specs-container-ricon"
            onClick={openType}
            size={20}
            color="#fff"
          />
          <Modal isOpen={isOpenType} closeModal={closeType}>
            <RestaurantsSpecsType />
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
            addRestaurantsType(values);
            resetForm({ values: "" });
            openType();
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

export default RestaurantsSpecsTypeForm;
