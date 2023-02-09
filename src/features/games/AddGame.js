import { Formik, Field, Form, formGroup } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, FormGroup, Label, Modal, ModalBody, ModalHeader } from "reactstrap";

const AddGame = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const game = {
            gameTitle: values.gameTitle,
            platform: values.platform
        }
        console.log(game);
        dispatch()
    }

    return (
        <>
            <Button outline color='warning' className="text-dark" onClick={() => setModalOpen(true)}><i className='fa fa-pencil fa-lg' /> Add Game</Button>
                <Modal isOpen={modalOpen}>
                    <ModalHeader className='bg-warning' toggle={() => setModalOpen(false)}>Add Game</ModalHeader>
                        <ModalBody>
                            <Formik
                            initialValues={{
                                gameTitle: '',
                                platform: ''
                            }} >
                                <Form>
                                    <FormGroup>
                                        <Label for='gameTitle'>Game Title</Label>
                                        <Field name='gameTitle' class='formcontrol' placeholder='Game Title' />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Platform</Label>
                                        <Field name='platform' class='formcontrol' placeholder='platform' />
                                    </FormGroup>
                                    <Button type='submit' outline className='text-dark' color='warning'>Submit</Button>
                                </Form>
                            </Formik>
                        </ModalBody>
                </Modal>
        </>
    )
}

export default AddGame;