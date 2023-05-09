package nl.jrdie.quotebookapp.quotes;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import nl.jrdie.quotebookapp.entities.QuoteEntity;
import nl.jrdie.quotebookapp.entities.QuoteListEntity;
import nl.jrdie.quotebookapp.entities.QuoteeEntity;
import nl.jrdie.quotebookapp.gqlgenerated.types.*;
import nl.jrdie.quotebookapp.graphql.GlobalId;
import nl.jrdie.quotebookapp.graphql.Relay;
import org.springframework.core.convert.ConversionService;
import org.springframework.graphql.data.method.annotation.*;
import org.springframework.stereotype.Controller;

@Controller
public class QuoteQueryController {

  private final QuoteService quoteService;
  private final QuoteRepository quoteRepository;
  private final QuoteeRepository quoteeRepository;
  private final QuoteListRepository quoteListRepository;
  private final ConversionService conversionService;

  public QuoteQueryController(
      QuoteService quoteService,
      QuoteRepository quoteRepository,
      QuoteeRepository quoteeRepository,
      QuoteListRepository quoteListRepository,
      ConversionService conversionService) {
    this.quoteService = quoteService;
    this.quoteRepository = quoteRepository;
    this.quoteeRepository = quoteeRepository;
    this.quoteListRepository = quoteListRepository;
    this.conversionService = conversionService;
  }

  @QueryMapping("viewer")
  public User viewer() {
    return User.newBuilder().id(Relay.toGlobalId("User", -999)).build();
  }

  @SchemaMapping(typeName = "User", field = "quotes")
  public QuoteList userQuotes(User user) {
    final List<QuoteEntity> quoteEntities = quoteService.quotesByUser(1);
    final List<Quote> quotes =
        quoteEntities.stream()
            .map(quoteEntity -> conversionService.convert(quoteEntity, Quote.class))
            .toList();
    return UnlinkedQuoteList.newBuilder().quotes(quotes).size(quotes.size()).build();
  }

  @SchemaMapping(typeName = "User", field = "quoteLists")
  public List<ShareableQuoteList> userQuoteLists(User user) {
    final List<QuoteListEntity> quoteListEntities = quoteListRepository.findAll();
    final List<ShareableQuoteList> quoteLists =
        quoteListEntities.stream()
            .map(
                quoteListEntity ->
                    conversionService.convert(quoteListEntity, ShareableQuoteList.class))
            .toList();
    return quoteLists;
  }

  @SchemaMapping(typeName = "User", field = "quotees")
  public List<Quotee> userQuotees(User user) {
    final List<QuoteeEntity> quoteeEntities = quoteeRepository.findAll();
    final List<Quotee> quoteeLists =
        quoteeEntities.stream()
            .map(quoteeEntity -> conversionService.convert(quoteeEntity, Quotee.class))
            .toList();
    return quoteeLists;
  }

  @MutationMapping("createQuote")
  public CreateQuotePayload createQuote(@Argument CreateQuoteInput input) {
    QuoteEntity quoteEntity = new QuoteEntity();
    quoteEntity.setLocationText(input.getLocationText());
    quoteEntity.setQuoteContext(input.getQuoteContext());
    quoteEntity.setQuoteDate(input.getQuoteDate());
    quoteEntity.setCreatedAt(OffsetDateTime.now());
    quoteEntity.setQuoteText(input.getQuoteText());
    final QuoteEntity savedQuoteEntity = quoteRepository.saveAndFlush(quoteEntity);
    final Quote savedQuote = conversionService.convert(savedQuoteEntity, Quote.class);
    return CreateQuotePayload.newBuilder().quote(savedQuote).userErrors(List.of()).build();
  }

  @MutationMapping("updateQuote")
  public UpdateQuotePayload updateQuote(@Argument String id, @Argument UpdateQuoteInput input) {
    final long quoteId = Relay.extractIdAndAssertType(id, "Quote");
    QuoteEntity quoteEntity = quoteRepository.findById(quoteId).orElseThrow();
    if (input.getLocationText() != null) {
      quoteEntity.setLocationText(input.getLocationText());
    }
    if (input.getQuoteContext() != null) {
      quoteEntity.setQuoteContext(input.getQuoteContext());
    }
    if (input.getQuoteDate() != null) {
      quoteEntity.setQuoteDate(input.getQuoteDate());
    }
    if (input.getQuoteText() != null) {
      quoteEntity.setQuoteText(input.getQuoteText());
    }
    if (quoteEntity.getQuotees() == null){
      quoteEntity.setQuotees(new ArrayList<>());
    }
    if (input.getQuotees() != null) {
      final UpdateQuoteQuoteeInput quotees = input.getQuotees();
      if (quotees.getAdd() != null) {
        final List<QuoteeEntity> add =
            quoteeRepository.findAllById(
                Relay.extractIdsAndAssertTypes(quotees.getAdd(), "Quotee"));
        quoteEntity.getQuotees().addAll(add);
      }
      if (quotees.getRemove() != null) {
        final List<QuoteeEntity> remove =
            quoteeRepository.findAllById(
                Relay.extractIdsAndAssertTypes(quotees.getRemove(), "Quotee"));
        quoteEntity.getQuotees().removeAll(remove);
      }
    }
    final QuoteEntity savedQuoteEntity = quoteRepository.saveAndFlush(quoteEntity);
    final Quote savedQuote = conversionService.convert(savedQuoteEntity, Quote.class);
    return UpdateQuotePayload.newBuilder().quote(savedQuote).userErrors(List.of()).build();
  }

  @MutationMapping("deleteQuote")
  public DeleteQuotePayload deleteQuote(@Argument String quoteId) {
    final long id = Relay.extractIdAndAssertType(quoteId, "Quote");
    quoteRepository.deleteById(id);
    return DeleteQuotePayload.newBuilder().userErrors(List.of()).build();
  }

  @MutationMapping("createQuotee")
  public CreateQuoteePayload createQuotee(@Argument CreateQuoteeInput input) {
    QuoteeEntity quoteeEntity = new QuoteeEntity();
    quoteeEntity.setName(input.getName());
    QuoteeEntity savedQuoteeEntity = quoteeRepository.saveAndFlush(quoteeEntity);
    final Quotee savedQlQuotee = conversionService.convert(savedQuoteeEntity, Quotee.class);
    return CreateQuoteePayload.newBuilder().quotee(savedQlQuotee).userErrors(List.of()).build();
  }

  @MutationMapping("updateQuotee")
  public UpdateQuoteePayload updateQuotee(@Argument String id, @Argument UpdateQuoteeInput input) {
    final long quoteeId = Relay.extractIdAndAssertType(id, "Quotee");
    QuoteeEntity quoteeEntity = quoteeRepository.findById(quoteeId).orElseThrow();
    quoteeEntity.setName(input.getName());
    quoteeRepository.saveAndFlush(quoteeEntity);
    return UpdateQuoteePayload.newBuilder().userErrors(List.of()).build();
  }

  @MutationMapping("deleteQuotee")
  public DeleteQuoteePayload deleteQuotee(@Argument String quoteeId) {
    final long id = Relay.extractIdAndAssertType(quoteeId, "Quotee");
    quoteeRepository.deleteById(id);
    return DeleteQuoteePayload.newBuilder().userErrors(List.of()).build();
  }

  @MutationMapping("createQuoteList")
  public CreateQuoteListPayload createQuoteList(@Argument CreateQuoteListInput input) {
    QuoteListEntity shareableQuoteList = new QuoteListEntity();
    shareableQuoteList.setCreatedAt(OffsetDateTime.now());
    shareableQuoteList.setName(input.getName());
    shareableQuoteList.setQuotes(new ArrayList<>());
    QuoteListEntity savedQuoteEntity = quoteListRepository.saveAndFlush(shareableQuoteList);
    final ShareableQuoteList savedQlList =
        conversionService.convert(savedQuoteEntity, ShareableQuoteList.class);
    return CreateQuoteListPayload.newBuilder().quoteList(savedQlList).userErrors(List.of()).build();
  }

  @MutationMapping("updateQuoteList")
  public UpdateQuoteListPayload updateQuoteList(
      @Argument String id, @Argument UpdateQuoteListInput input) {
    final long quoteListId = Relay.extractIdAndAssertType(id, "ShareableQuoteList");
    QuoteListEntity quoteListEntity = quoteListRepository.findById(quoteListId).orElseThrow();
    if (input.getName() != null) {
      quoteListEntity.setName(input.getName());
    }
    if (input.getAddQuotes() != null) {
      final List<QuoteEntity> add =
          quoteRepository.findAllById(
              Relay.extractIdsAndAssertTypes(input.getAddQuotes(), "Quote"));
      quoteListEntity.getQuotes().addAll(add);
    }
    if (input.getRemoveQuotes() != null) {
      final List<QuoteEntity> remove =
          quoteRepository.findAllById(
              Relay.extractIdsAndAssertTypes(input.getRemoveQuotes(), "Quote"));
      quoteListEntity.getQuotes().removeAll(remove);
    }
    QuoteListEntity saved = quoteListRepository.saveAndFlush(quoteListEntity);
    final ShareableQuoteList savedQlList =
        conversionService.convert(saved, ShareableQuoteList.class);
    return UpdateQuoteListPayload.newBuilder().quoteList(savedQlList).userErrors(List.of()).build();
  }

  @MutationMapping("deleteQuoteList")
  public DeleteQuoteListPayload deleteQuoteList(@Argument String quoteListId) {
    final long id = Relay.extractIdAndAssertType(quoteListId, "ShareableQuoteList");
    quoteListRepository.deleteById(id);
    return DeleteQuoteListPayload.newBuilder().userErrors(List.of()).build();
  }

  @SchemaMapping(typeName = "Quote", field = "quotees")
  public List<Quotee> quotees(Quote quote) {
    List<QuoteeEntity> quoteeEntities =
        quoteRepository
            .findById(Relay.extractIdAndAssertType(quote.getId(), "Quote"))
            .orElseThrow()
            .getQuotees();
    if (quoteeEntities == null) {
      quoteeEntities = List.of();
    }
    return quoteeEntities.stream()
        .map(quoteeEntity -> conversionService.convert(quoteeEntity, Quotee.class))
        .toList();
  }

  @SchemaMapping(typeName = "ShareableQuoteList", field = "quotes")
  public List<Quote> quotes(ShareableQuoteList shareableQuoteList) {
    List<QuoteEntity> quoteeEntities =
        quoteListRepository
            .findById(
                Relay.extractIdAndAssertType(shareableQuoteList.getId(), "ShareableQuoteList"))
            .orElseThrow()
            .getQuotes();
    if (quoteeEntities == null) {
      quoteeEntities = List.of();
    }
    return quoteeEntities.stream()
        .map(quoteeEntity -> conversionService.convert(quoteeEntity, Quote.class))
        .toList();
  }

  @QueryMapping("node")
  public Node node(@Argument String id) {
    GlobalId globalId = Relay.fromGlobalId(id);
    return switch (globalId.type()) {
      case "Quote" -> quoteRepository
          .findById(globalId.id())
          .map(entity -> conversionService.convert(entity, Quote.class))
          .orElse(null);
      case "Quotee" -> quoteeRepository
          .findById(globalId.id())
          .map(entity -> conversionService.convert(entity, Quotee.class))
          .orElse(null);
      case "ShareableQuoteList" -> quoteListRepository
          .findById(globalId.id())
          .map(entity -> conversionService.convert(entity, ShareableQuoteList.class))
          .orElse(null);
      case "User" -> User.newBuilder().id(Relay.toGlobalId("User", -999)).build();
      default -> throw new IllegalArgumentException("Unknown type " + globalId.type());
    };
  }
}
