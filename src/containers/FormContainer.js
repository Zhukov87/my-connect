import { addElement } from "../actions/actions";
import { myConnect } from "../lib/myConnect";
import { Form } from "../components/Form";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addElement: (label, value) => {
    dispatch(addElement(label, value));
  }
});

const enhance = myConnect(mapStateToProps, mapDispatchToProps);

export const FormContainer = enhance(Form);
