import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });
import AppRoute from "./AppRoute";

it("should render snapshot  of approute", () => {
  const component = shallow(<AppRoute />);
  expect(component).toMatchSnapshot();
});
