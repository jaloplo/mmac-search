import ArtworkService from './ArtworkService';
import DepartmentsService from './DepartmentService';
import RandomProvider from './RandomProvider';

const find = async () => {
    const departments = await DepartmentsService.find();
    const index = RandomProvider.get(departments.length);
    const departmentChosen = departments[index];
    const artworks = await ArtworkService.find(departmentChosen.title);
    return artworks.slice(0, 4); 
};

export default { find };