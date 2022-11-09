import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppInfo } from "../../context/AppContext";
import { IoImageOutline } from "react-icons/io5";
import { useModal } from "../Modals/useModal";
import { CarouselActivities, Modal } from "../index";
import "./forms.css";

const AddCarouselImageForm = () => {
  const { addImageBank } = useAppInfo();
  const [isOpenCarouselImage, closeCarouselImage, openCarouselImage] =
    useModal(false);
  return (
    <div className="form_container">
      <div className="form_container-icon">
        <div className="form_container-icon-title">Carousel Actividades</div>
        <IoImageOutline
          className="form_container-icon-openmodal"
          onClick={openCarouselImage}
          size={70}
          color="#fff"
        />
        <Modal isOpen={isOpenCarouselImage} closeModal={closeCarouselImage}>
          <CarouselActivities/>
        </Modal>
      </div>
      <div className="form_container-form">
        <div className="form_container-form-title">Agregar Imagen</div>
        <Formik
          initialValues={{
            name: "",
            image: null,
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Nombre es requerido!")
              .min(3, "La longitud minima es de 3 letras!")
              .max(19, "La longitud maxima es de 19 letras!"),
              image: Yup.mixed().required("Imagen es requerida!")
          })}
          onSubmit={(values, { resetForm }) => {
            addImageBank(values);
            resetForm({ values: "" });
            openCarouselImage()
          }}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form className="form_container-form" onSubmit={handleSubmit}>
              <Field
                className="form_container-field"
                name="name"
                placeholder="Nombre"
              />
              <ErrorMessage
                component="p"
                className="form_container-field-error"
                name="name"
              />
               <input onChange={(e)=>setFieldValue('image',e.target.files[0])} type="file" name="image" />
               <ErrorMessage
                component="p"
                className="form_container-field-error"
                name="image"
              />
               <button type="submit">Guardar</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddCarouselImageForm;
