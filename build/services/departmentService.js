"use strict";
// import { db } from '../database/models';
// import Department from '../database/models/department';
// class DepartmentService {
//     private static instance: DepartmentService;
//     static getInstance() {
//         if (!DepartmentService.instance) {
//             DepartmentService.instance = new DepartmentService();
//         }
//         return DepartmentService.instance;
//     }
//     findAll = async () => {
//         const departments: Department[] = await Department.findAll();
//         return departments;
//     };
//     findById = async (id: number) => {
//         const existingDepartment: Department | null = await Department.findByPk(
//             id
//         );
//         return existingDepartment;
//     };
//     save = async (object: any) => {
//         try {
//             if (!object && Object.keys(object).length == 0) {
//                 throw new Error('Object must contain at least one property');
//             }
//             const department = await Department.create({ ...object });
//             return department;
//         } catch (err) {
//             throw err;
//         }
//     };
//     update = async (id: number, object: any) => {
//         if (!object && Object.keys(object).length == 0) {
//             throw new Error(
//                 'Object to be updated must contain at least one property.'
//             );
//         }
//         let existingDepartment = await this.findById(id);
//         if (!existingDepartment) {
//             throw new Error('department_not_found');
//         }
//         try {
//             await Department.update(
//                 { ...object },
//                 {
//                     where: { id },
//                 }
//             );
//             existingDepartment = await this.findById(id);
//             return existingDepartment;
//         } catch (err) {
//             throw err;
//         }
//     };
//     deleteByPrimaryKey = async (id: number) => {
//         let existingDepartment = await this.findById(id);
//         if (!existingDepartment) {
//             throw new Error('department_not_found');
//         }
//         try {
//             await existingDepartment.destroy();
//         } catch (err) {
//             throw err;
//         }
//     };
// }
// export default DepartmentService;
