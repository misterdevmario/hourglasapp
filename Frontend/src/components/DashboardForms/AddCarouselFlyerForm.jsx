import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppInfo } from "../../context/AppContext";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { useModal } from "../Modals/useModal";
import { CarouselFlyer, Modal } from "../index";
import "./forms.css";

const AddCarouselFlyerForm = () => {
  const { addFlyerCarousel } = useAppInfo();
  const [isOpenCarouselFlyerImage, closeCarouselFlyerImage, openCarouselFlyerImage] =
    useModal(false);
  return (
    <div className="form_container">
      <div className="form_container-icon">
        <div className="form_container-icon-title">Carousel Flyers</div>
        <HiOutlineDocumentPlus
          className="form_container-icon-openmodal"
          onClick={openCarouselFlyerImage}
          size={50}
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
            name: "",
            image: null,
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Nombre es requerido!")
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

export default AddCarouselFlyerForm;
