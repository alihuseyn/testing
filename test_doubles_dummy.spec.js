class Project {
    constructor() {
        this.projects = [];
    }
    add(project) {
        this.projects.push(project);
    }
    count() {
        return this.projects.length;
    }
}


describe('Add Project', () => {
    it('Should keep track of the number of projects', () => {
        const DummyProject = function() { return {}; };

        const manager = new Project();
        manager.add(new DummyProject());
        manager.add(new DummyProject());
        manager.add(new DummyProject());

        expect(manager.count()).toEqual(3);
    });
});
