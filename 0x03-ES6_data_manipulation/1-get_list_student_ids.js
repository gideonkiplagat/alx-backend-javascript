import getListStudents from "./0-get_list_students";

const get_list_students = (listStudents) => {
    let listStudentsIds = [];
    if (!(listStudents instanceof Array)) {
        return listStudents;
    }
    listStudentsIds = listStudents.map((student) => student.id);
    return listStudentsIds;
};

export default getListStudentsIds
