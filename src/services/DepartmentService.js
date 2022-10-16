import DepartmentModel from '../model/DepartmentModel';
import MacDepartmentsProvider from './MacDepartmentsProvider';

const find = async () => {
    const data = await MacDepartmentsProvider.find();
    const departments = data.departments.map(d => DepartmentModel.build(d));
    return departments;
};

export default { find };