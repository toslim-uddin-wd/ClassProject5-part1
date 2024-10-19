import Container from "../../component/Container";
import { Button} from "flowbite-react";
import { Table } from "flowbite-react";
import TaskItem from "./TaskItem";
import TaskTableHeader from "./TaskTableHeader";

function NoData () {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={6} className=" text-center">No Data Found</Table.Cell>
        </Table.Row>
    )
}

function TaskTable() {
  return (
    <Container className=" mt-8">
        <div className="flex justify-end w-full">
            <Button className="mr-2" color="failure">Add Task</Button>
            <Button color="success">Clear Task</Button>
        </div>

        <div className="py-2 my-6 rounded-sm border">
            <TaskTableHeader />
            <div className="overflow-x-auto mt-6">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>#</Table.HeadCell>
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Description</Table.HeadCell>
                        <Table.HeadCell>Assigned</Table.HeadCell>
                        <Table.HeadCell>Priority</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                        <NoData />
                    </Table.Body>
                </Table>
            </div>
        </div>
    </Container>
  )
}

export default TaskTable 