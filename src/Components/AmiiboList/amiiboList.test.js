import AmiiboList from ".";
import { shallow } from "enzyme";
import React from "react";

describe("AmiiboList", () => {
  it("It renders from an API response", () => {
    const apiResponse = {
      data: {
        status: "success",
        message: { affenpischer: [], african: [], airedale: [] }
      }
    };
    const wrapper = shallow(<AmiiboList />);
    expect(wrapper.find('[data-test="list"]').length).toEqual(1);
  });
});
