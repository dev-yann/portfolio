import DevToRepository from "~/repositories/devToRepository";

export default function createRepositories() {
    return {
        devTo: new DevToRepository()
    }
}