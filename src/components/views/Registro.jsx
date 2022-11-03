import { Card, Container, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearUsuario } from "../helpers/queries";


const Registro = ({setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    crearUsuario(data).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          `Usuario creado`,
          `El usuario ${data.nombre} se creo correctamente`,
          "success"
        );
        reset()
      } else {
        Swal.fire(
          `Hubo un error inesperado`,
          "Intentelo nuevamente en breve.",
          "error"
        );
      }
    });
  };

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Crear cuenta</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formNombreApellido">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Juan Perez"
                {...register("nombre", {
                  required: "El nombre de password es obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="juanperez@gmail.com"
                {...register("email", {
                  required: "El nombre de password es obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "El nombre de password es obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Crear
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Registro;
