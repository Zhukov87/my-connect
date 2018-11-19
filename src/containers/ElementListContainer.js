import { ElementList } from "../components/ElementList";
import { myConnect } from "../lib/myConnect";
import { deleteElement } from "../actions/actions";

const mapStateToProps = ({ list }) => ({
  list
});

const mapDispatchToProps = dispatch => ({
  deleteElement: label => {
    dispatch(deleteElement(label));
  }
});

const enhance = myConnect(mapStateToProps, mapDispatchToProps);

export const ElementListContainer = enhance(ElementList);
