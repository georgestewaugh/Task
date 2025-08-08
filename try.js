const express = require('express');
const router = express.Router();

// In-memory Employee table
let employees = [];
let nextEmpId = 1;


/**
 * @swagger
 * /api/employees:
 *   get:
 *     summary: Get all employees (not deleted)
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: List of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
router.get('/employees', (req, res) => {
    const activeEmployees = employees.filter(emp => !emp.isDeleted);
    res.json(activeEmployees);
});


/**
 * @swagger
 * /api/employees:
 *   post:
 *     summary: Add a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmployeeInput'
 *     responses:
 *       201:
 *         description: Employee created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 */
router.post('/employees', (req, res) => {
    const { EmployeeName, EmployeeCode, DOB, Mobile } = req.body;
    if (!EmployeeName || !EmployeeCode || !DOB || !Mobile) {
        return res.status(400).json({ error: 'All fields required' });
    }
    const employee = {
        EmployeeID: nextEmpId++,
        EmployeeName,
        EmployeeCode,
        DOB,
        Mobile,
        isDeleted: false
    };
    employees.push(employee);
    res.status(201).json(employee);
});


/**
 * @swagger
 * /api/employees/{id}:
 *   put:
 *     summary: Update an employee
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Employee ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmployeeInput'
 *     responses:
 *       200:
 *         description: Employee updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Employee not found
 */
router.put('/employees/:id', (req, res) => {
    const emp = employees.find(e => e.EmployeeID === parseInt(req.params.id));
    if (!emp || emp.isDeleted) {
        return res.status(404).json({ error: 'Employee not found' });
    }
    const { EmployeeName, EmployeeCode, DOB, Mobile } = req.body;
    if (EmployeeName) emp.EmployeeName = EmployeeName;
    if (EmployeeCode) emp.EmployeeCode = EmployeeCode;
    if (DOB) emp.DOB = DOB;
    if (Mobile) emp.Mobile = Mobile;
    res.json(emp);
});


/**
 * @swagger
 * /api/employees/{id}:
 *   delete:
 *     summary: Soft delete an employee
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee deleted (soft)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Employee not found
 */
router.delete('/employees/:id', (req, res) => {
    const emp = employees.find(e => e.EmployeeID === parseInt(req.params.id));
    if (!emp || emp.isDeleted) {
        return res.status(404).json({ error: 'Employee not found' });
    }
    emp.isDeleted = true;
    res.json({ message: 'Employee deleted (soft)' });
});


/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       properties:
 *         EmployeeID:
 *           type: integer
 *         EmployeeName:
 *           type: string
 *         EmployeeCode:
 *           type: string
 *         DOB:
 *           type: string
 *         Mobile:
 *           type: string
 *         isDeleted:
 *           type: boolean
 *     EmployeeInput:
 *       type: object
 *       properties:
 *         EmployeeName:
 *           type: string
 *         EmployeeCode:
 *           type: string
 *         DOB:
 *           type: string
 *         Mobile:
 *           type: string
 */
// Example route
router.get('/try', (req, res) => {
    res.send('<h1>welcome try page</h1>');
});

module.exports = router;