class DevToRepository {
    all(): Promise<IAllDevToResponse[]> {
        return $fetch('https://dev.to/api/articles?username=devyann')
    }
}

export default DevToRepository;