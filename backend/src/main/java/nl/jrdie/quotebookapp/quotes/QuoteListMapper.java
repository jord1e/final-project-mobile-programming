package nl.jrdie.quotebookapp.quotes;

import nl.jrdie.quotebookapp.entities.QuoteEntity;
import nl.jrdie.quotebookapp.entities.QuoteListEntity;
import nl.jrdie.quotebookapp.gqlgenerated.types.Quote;
import nl.jrdie.quotebookapp.gqlgenerated.types.ShareableQuoteList;
import nl.jrdie.quotebookapp.graphql.Relay;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.core.convert.converter.Converter;

@Mapper(
    componentModel = "spring",
    imports = {Relay.class})
public interface QuoteListMapper extends Converter<QuoteListEntity, ShareableQuoteList> {

  @Mapping(target = "size", expression = "java(source.getQuotes().size())")
  @Mapping(target = "quotes", ignore = true)
  @SuppressWarnings("NullableProblems")
  @Mapping(target = "id", expression = "java(Relay.toGlobalId(\"ShareableQuoteList\", source.getId()))")
  ShareableQuoteList convert(QuoteListEntity source);
}
