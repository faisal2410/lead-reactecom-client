import React from "react";
import { Button, Tooltip } from "antd";
import { Select, Slider } from "antd";
import { programLevels } from "../../staticData/programLevel";
import { countries } from "../../staticData/country";
import { studyAreas } from "../../staticData/studyArea";
const AdvanceSearchForm = ({ 
  values,
  setValues,
  handleAdvanceSearch,
  handleAdvanceSlider,
  handleAdvanceStudyArea,
  handleAdvanceProgramLevel,
  handleAdvanceCountry
 }) => {
 
  return (
    <div className="container pt-3">
      <form onSubmit={handleAdvanceSearch}>
        <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
          Filter by Study Area
        </h2>
        <div className="row p-1">
          <Select
            showSearch
            bordered={false}
            size="large"
            className="form-select mb-3"
            placeholder="Choose Study Area"
            optionFilterProp="children"
            onChange={handleAdvanceStudyArea}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={(studyAreas || []).map((s) => ({
              value: s.studyArea,
              label: s.studyArea,
            }))}
          />
        </div>
        <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
          Filter by Program Level
        </h2>

        <div className="row p-1">
          <Select
            showSearch
            bordered={false}
            size="large"
            className="form-select mb-3"
            placeholder="Choose Study Area"
            optionFilterProp="children"
            onChange={handleAdvanceProgramLevel}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={(programLevels || []).map((p) => ({
              value: p.programLevel,
              label: p.programLevel,
            }))}
          />
        </div>
        <div className="row p-1">
          <Tooltip title="Tuition Fees range GBP 0 to 30000">
            <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
              Filter by Tuition Fees
            </h2>
            <Slider
              className="ms-4 me-4"
              tipFormatter={(v) => `£${v}`}
              range
              value={values.searchYearlyTuitionFees}
              onChange={handleAdvanceSlider}
              max="30000"
            />
          </Tooltip>
        </div>

        <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
          Filter by Country
        </h2>
        <div className="row p-1">
          <Select
            showSearch
            bordered={false}
            size="large"
            className="form-select mb-3"
            placeholder="Choose Country"
            optionFilterProp="children"
            onChange={handleAdvanceCountry}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={(countries || []).map((c) => ({
              value: c.country,
              label: c.country,
            }))}
          />
        </div>

        <Button
          onClick={handleAdvanceSearch}
          className="col mt-3"
          size="large"
          type="primary"
          shape="round"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AdvanceSearchForm;
