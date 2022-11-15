import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppInfo } from "../../context/AppContext";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { useModal } from "../Modals/useModal";
import { CarouselFlyer, Modal } from "../index";
import "./forms.css";

const AddCarouselFlyerForm = () => {
  const { addFlyerCarousel } = useAppInfo();
  const [isOpenCarouselFlyerImage, closeCarouselFlyerImage, openCarouselFlyerImage] =
    useModal(false);
  return (
    <div className="form_container" id="flyer">
      <div className="form_container-icon">
        <div className="form_container-icon-title">Carousel Flyers</div>
        <HiOutlineDocumentReport
          className="form_container-icon-openmodal"
          onClick={openCarouselFlyerImage}
          size={60}
          color="#fff"
        />
        <Modal isOpen={isOpenCarouselFlyerImage} closeModal={closeCarouselFlyerImage}>
          <CarouselFlyer/>
        </Modal>
      </div>
      <div className="form_container-form">
        <div className="form_container-form-title">Agregar Flyer</div>
        <Formik
          initialValues={{
            en: "",
            es: "",
            image: null,
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
              image: Yup.mixed().required("Flyer es requerido!")
          })}
          onSubmit={(values, { resetForm }) => {
            addFlyerCarousel(values);
            resetForm({ values: "" });
            openCarouselFlyerImage()
          }}
        >
          {({ handleSubmit, setFieldValue }) => (
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

export default AddCarouselFlyerForm;
