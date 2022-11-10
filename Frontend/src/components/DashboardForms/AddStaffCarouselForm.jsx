import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppInfo } from "../../context/AppContext";
import { BsPersonBoundingBox } from "react-icons/bs";
import { useModal } from "../Modals/useModal";
import { CarouselStaff, Modal } from "../index";
import "./forms.css";

const AddCarouselImageForm = () => {
  const { addStaffCarousel } = useAppInfo();
  const [isOpenCarouselStaff, closeCarouselStaff, openCarouselStaff] =
    useModal(false);
  return (
    <div className="form_container">
      <div className="form_container-icon">
        <div className="form_container-icon-title">Carousel de Personal</div>
        <BsPersonBoundingBox
          className="form_container-icon-openmodal"
          onClick={openCarouselStaff}
          size={50}
          color="#fff"
        />
        <Modal isOpen={isOpenCarouselStaff} closeModal={closeCarouselStaff}>
          <CarouselStaff />
        </Modal>
      </div>
      <div className="form_container-form">
        <div className="form_container-form-title">Agregar personal</div>
        <Formik
          initialValues={{
            name: "",
            phraseEn: "",
            phraseEs: "",
            image: null,
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Nombre es requerido!")
              .min(3, "La longitud minima es de 3 letras!")
              .max(19, "La longitud maxima es de 19 letras!"),
            phraseEn: Yup.string()
              .required("Frase en ingles es requerida!")
              .min(3, "La longitud minima es de 3 letras!")
              .max(19, "La longitud maxima es de 19 letras!"),
            phraseEs: Yup.string()
              .required("Frase en español es requerida!")
              .min(3, "La longitud minima es de 3 letras!")
              .max(19, "La longitud maxima es de 19 letras!"),
            image: Yup.mixed().required("Imagen es requerida!"),
          })}
          onSubmit={(values, { resetForm }) => {
            addStaffCarousel(values);
            resetForm({ values: "" });
            openCarouselStaff();
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
              <Field
                className="form_container-field"
                name="phraseEn"
                placeholder="Agrega frase en ingles"
              />
              <ErrorMessage
                component="p"
                className="form_container-field-error"
                name="phraseEn"
              />
              <Field
                className="form_container-field"
                name="phraseEs"
                placeholder="Agrega frase en español"
              />
              <ErrorMessage
                component="p"
                className="form_container-field-error"
                name="phraseEs"
              />
              <input
                onChange={(e) => setFieldValue("image", e.target.files[0])}
                type="file"
                name="image"
              />
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
