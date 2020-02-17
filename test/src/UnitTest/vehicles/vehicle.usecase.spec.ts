import { Test, TestingModule } from "@nestjs/testing";
import GetAllUseCase from "../../../../src/application/vehicle/getAll.usecase";
import GetByIDUseCase from "../../../../src/application/vehicle/getById.usecase";
import CreateUseCase from "../../../../src/application/vehicle/create.usecase";
import UpdateUseCase from "../../../../src/application/vehicle/update.usecase";
import DeleteUseCase from "../../../../src/application/vehicle/delete.usecase";
import VehicleRepositoryMongoMock from './vehicleRepository.mock';
import Vehicle from "../../../../src/domain/vehicle";

describe('VehicleUseCase', () =>{
    let getAllUseCase: GetAllUseCase;
    let getByIDUseCase: GetByIDUseCase;
    let createUseCase: CreateUseCase;
    let updateUseCase: UpdateUseCase;
    let deleteUseCase: DeleteUseCase;
    let module: TestingModule;

    beforeEach(async () => {
        const repositoryProvider = {
            provide: 'VehicleRepository',
            useClass: VehicleRepositoryMongoMock,
        }

        module = await Test.createTestingModule({
            providers: [
                GetAllUseCase,
                GetByIDUseCase,
                CreateUseCase,
                UpdateUseCase,
                DeleteUseCase,
                repositoryProvider
            ]
        }).compile();

        getAllUseCase = module.get<GetAllUseCase>(GetAllUseCase);
        getByIDUseCase = module.get<GetByIDUseCase>(GetByIDUseCase);
        createUseCase = module.get<CreateUseCase>(CreateUseCase);
        updateUseCase = module.get<UpdateUseCase>(UpdateUseCase);
        deleteUseCase = module.get<DeleteUseCase>(DeleteUseCase);
    });

    describe('getAllHandler', () => {
        it('return an array of vehicles', async () => {
            const result = await getAllUseCase.handler();
            expect(result.length).toEqual(1)
        });
    });

    describe('getByIdHandler', () =>{
        it('return an vehicle', async () => {
            const expectedPlaca= 'GIF46F';
            const result = await getByIDUseCase.handler('5e4307dc1070db3c3c909cbc');
            expect(result.getPlaca()).toBe(expectedPlaca)
        });
    });

    describe('createHandler', () =>{
        it('return the vehicle created', async () => {
            const vehicle = new Vehicle('5e4307dc1070db3c3c909cbc','ABC123', 1600, "1", new Date(), new Date());
            const result = await createUseCase.handler(vehicle);
            expect(result.getPlaca()).toBe(vehicle.getPlaca());
        });
    });

    describe('updateHandler', () =>{
        it('return the vehicle created', async () => {
            const vehicle = new Vehicle('5e4307dc1070db3c3c909cbc','ABC123', 1600, "1", new Date(), new Date());
            const result = await updateUseCase.handler('5e4307dc1070db3c3c909cbc', vehicle);
            expect(result.getPlaca()).toBe(vehicle.getPlaca());
        });
    });

    describe('deleteHandler', () =>{
        it('return the vehicle created', async () => {
            const expectedPlaca = 'ABC123';
            const result = await deleteUseCase.handler('5e4307dc1070db3c3c909cbc');
            expect(result.getPlaca()).toBe(expectedPlaca);
        });
    });

})